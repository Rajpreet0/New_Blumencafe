type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface Times extends Base {
    title: string;
    time: string;
    slug: Slug;
}

interface Info extends Base {
    info: string;
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Title {
    _type: "string";
    current: string;
}
