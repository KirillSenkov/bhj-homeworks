const tooltips = document.querySelectorAll(".has-tooltip");

let activeTooltip = null;

tooltips.forEach((tooltip) => {
    tooltip.addEventListener("click", (event) => {
        event.preventDefault();

        if (activeTooltip) {
            activeTooltip.remove();
            activeTooltip = null;
        }

        const tooltipText = tooltip.getAttribute("title");
        const tooltipElement = document.createElement("div");
        tooltipElement.className = "tooltip tooltip_active";
        tooltipElement.textContent = tooltipText;

        const { left, top, height } = tooltip.getBoundingClientRect();
        tooltipElement.style.left = `${left}px`;
        tooltipElement.style.top = `${top + height}px`;

        document.body.appendChild(tooltipElement);
        activeTooltip = tooltipElement;

        tooltipElement.addEventListener("click", (e) => {
            e.preventDefault();
            tooltipElement.remove();
            activeTooltip = null;
        });
    });
});

document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("has-tooltip") && activeTooltip) {
        activeTooltip.remove();
        activeTooltip = null;
    }
});