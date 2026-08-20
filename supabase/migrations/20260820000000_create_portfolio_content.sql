create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text not null default '',
  category text not null default '',
  year text not null default '',
  cover_path text,
  content jsonb not null default '{}'::jsonb,
  sort_order integer not null default 0,
  published boolean not null default false,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.artworks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  year text not null default '',
  image_path text not null,
  alt_text text not null,
  description text not null default '',
  sort_order integer not null default 0,
  published boolean not null default false,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

drop trigger if exists set_projects_updated_at on public.projects;
create trigger set_projects_updated_at
before update on public.projects
for each row execute function public.set_updated_at();

drop trigger if exists set_artworks_updated_at on public.artworks;
create trigger set_artworks_updated_at
before update on public.artworks
for each row execute function public.set_updated_at();

alter table public.projects enable row level security;
alter table public.artworks enable row level security;

revoke all on table public.projects from anon, authenticated;
revoke all on table public.artworks from anon, authenticated;
grant select on table public.projects to anon, authenticated;
grant select on table public.artworks to anon, authenticated;

revoke execute on function public.set_updated_at() from public, anon, authenticated;

drop policy if exists "Public can read published projects" on public.projects;
create policy "Public can read published projects"
on public.projects
for select
to anon, authenticated
using (published = true);

drop policy if exists "Public can read published artworks" on public.artworks;
create policy "Public can read published artworks"
on public.artworks
for select
to anon, authenticated
using (published = true);
