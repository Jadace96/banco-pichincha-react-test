export const formatDate = (date = new Date()): string => date?.toISOString().substring(0, 10);
