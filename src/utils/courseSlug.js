export const normalizeCourseSlug = (value = "") =>
    String(value)
        .toLowerCase()
        .trim()
        .replace(/&/g, " and ")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

export const getCourseSlug = (course) => {
    const titleSlug = normalizeCourseSlug(course?.title || "");
    if (titleSlug) return titleSlug;

    const idSuffix = course?.id ? `-${course.id}` : "";
    return `course${idSuffix}`;
};

export const resolveCourseIdFromSlug = (slug, courses = []) => {
    if (!slug || !Array.isArray(courses) || courses.length === 0) return null;

    const normalizedSlug = normalizeCourseSlug(decodeURIComponent(String(slug)));
    const matchedCourse = courses.find((course) => getCourseSlug(course) === normalizedSlug);

    return matchedCourse?.id ?? null;
};
