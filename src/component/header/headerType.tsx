export type SubMenuProps = {
    title:string;
    subTitle?:string;
    link:string;
    icon?:string;
};


export type SubCategoryProps = {
    id: number;
    name: string;
    description: string;
    icon: string;
}

export type CategoryProps = {
    id: number;
    name: string;
    subCategories: SubCategoryProps[]
}

export type HeaderProps = {
    categories: CategoryProps[]
}