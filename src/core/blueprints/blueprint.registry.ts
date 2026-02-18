// Blueprint Registry - Manages all sector templates

import type { BlueprintConfig, BlueprintType, WidgetDefinition, BlueprintRegistry } from '@/types/blueprint.types';

class BlueprintRegistryImpl implements BlueprintRegistry {
    private blueprints: Map<BlueprintType, BlueprintConfig> = new Map();

    register(blueprint: BlueprintConfig): void {
        if (this.blueprints.has(blueprint.id)) {
            console.warn(`Blueprint "${blueprint.id}" already registered. Overwriting...`);
        }
        this.blueprints.set(blueprint.id, blueprint);
    }

    get(type: BlueprintType): BlueprintConfig | undefined {
        return this.blueprints.get(type);
    }

    getAll(): BlueprintConfig[] {
        return Array.from(this.blueprints.values());
    }

    getWidget(blueprintType: BlueprintType, widgetId: string): WidgetDefinition | undefined {
        const blueprint = this.blueprints.get(blueprintType);
        if (!blueprint) return undefined;
        return blueprint.widgets.find(w => w.id === widgetId);
    }
}

// Singleton instance
export const blueprintRegistry = new BlueprintRegistryImpl();

// Auto-register blueprints
export function registerBlueprint(blueprint: BlueprintConfig): void {
    blueprintRegistry.register(blueprint);
}

// Get blueprint by type
export function getBlueprint(type: BlueprintType): BlueprintConfig | undefined {
    return blueprintRegistry.get(type);
}

// Get all available blueprints
export function getAllBlueprints(): BlueprintConfig[] {
    return blueprintRegistry.getAll();
}
