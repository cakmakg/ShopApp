// Blueprint System Types
// Defines the structure for sector-specific website templates

import { ReactNode } from 'react';

export type BlueprintType =
    | 'health-beauty'    // Sağlık & Güzellik
    | 'jewelry'          // Kuyumcu
    | 'supermarket'      // Süpermarket
    | 'tourism'          // Turizm Acentesi
    | 'clothing'         // Elbise Mağazası
    | 'restaurant'       // Restoran
    | 'electronics';     // Elektronik

export interface BlueprintConfig {
    id: BlueprintType;
    name: string;
    description: string;
    icon: string;
    version: string;

    // Theme defaults
    theme: BlueprintTheme;

    // Available widgets for this blueprint
    widgets: WidgetDefinition[];

    // Default page layouts
    defaultPages: PageLayout[];

    // Sector-specific product fields
    productFields: ProductFieldDefinition[];

    // Features enabled for this blueprint
    features: BlueprintFeatures;
}

export interface BlueprintTheme {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    fontFamily: string;
    borderRadius: string;
}

export interface WidgetDefinition {
    id: string;
    name: string;
    description: string;
    category: 'hero' | 'product' | 'content' | 'cta' | 'footer' | 'navigation';
    thumbnail?: string;
    defaultProps: Record<string, unknown>;
    configurable: boolean;
}

export interface PageLayout {
    path: string;
    name: string;
    widgets: string[]; // Widget IDs
    isRequired: boolean;
}

export interface ProductFieldDefinition {
    name: string;
    label: string;
    type: 'text' | 'number' | 'select' | 'boolean' | 'rich-text';
    required: boolean;
    options?: string[]; // For select type
    defaultValue?: unknown;
}

export interface BlueprintFeatures {
    hasInventory: boolean;
    hasVariants: boolean;
    hasBooking: boolean;
    hasSubscription: boolean;
    hasDigitalProducts: boolean;
    hasWishlist: boolean;
    hasReviews: boolean;
    hasLoyaltyProgram: boolean;
}

// Widget Component Props
export interface WidgetProps {
    tenantId: string;
    config: Record<string, unknown>;
    children?: ReactNode;
}

// Blueprint Registry Interface
export interface BlueprintRegistry {
    register(blueprint: BlueprintConfig): void;
    get(type: BlueprintType): BlueprintConfig | undefined;
    getAll(): BlueprintConfig[];
    getWidget(blueprintType: BlueprintType, widgetId: string): WidgetDefinition | undefined;
}
