class AppColors {
    // Base Colors
    static whiteColor = "#FFFFFF";
    static blackColor = "#000000";

    // Equivalent to Flutter's Color.withOpacity() — appends an alpha byte to a #RRGGBB hex color.
    static withOpacity(hex: string, opacity: number): string {
        const alpha = Math.round(opacity * 255)
            .toString(16)
            .padStart(2, "0");
        return `${hex}${alpha}`;
    }
}

export default AppColors;
