export const DetailsFilter = (data, id) => {
    return data.find((blog) => blog.id == parseInt(id));
};
