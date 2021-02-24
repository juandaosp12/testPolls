export interface Poll {
  id:number;
  name:string;
  pubdate: Date;
  category: string;
  description: string;
  votesUp:number;
  votesDown:number;
  selectedDown:boolean;
  selectedUp:boolean;
  voted:boolean;
  showNotSelectedError:boolean;
}
