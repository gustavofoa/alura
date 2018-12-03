export interface Photo {

    id: number;
    postdate: Date;
    url: string;
    description: string;
    allowComments: boolean;
    likes: number;
    comments: number;
    userId: number;

}