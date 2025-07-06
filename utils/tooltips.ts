
export const initTooltips = () => {
    if (typeof window !== 'undefined') {
        import('bootstrap/dist/js/bootstrap.bundle').then((bootstrap) => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach(el => new bootstrap.default.Tooltip(el));
        });
    }
};