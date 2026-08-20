export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          slug: string;
          title: string;
          summary: string;
          category: string;
          year: string;
          cover_path: string | null;
          content: Json;
          sort_order: number;
          published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          summary?: string;
          category?: string;
          year?: string;
          cover_path?: string | null;
          content?: Json;
          sort_order?: number;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          summary?: string;
          category?: string;
          year?: string;
          cover_path?: string | null;
          content?: Json;
          sort_order?: number;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      artworks: {
        Row: {
          id: string;
          title: string;
          year: string;
          image_path: string;
          alt_text: string;
          description: string;
          sort_order: number;
          published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          year?: string;
          image_path: string;
          alt_text: string;
          description?: string;
          sort_order?: number;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          year?: string;
          image_path?: string;
          alt_text?: string;
          description?: string;
          sort_order?: number;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
