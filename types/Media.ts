export interface MediaResponse {
  alt_text: string;
  source_url: string;
  media_details: {
    sizes: {
      medium_large: {
        source_url: string;
      };
      large: {
        source_url: string;
      };
    };
  };
}
