import { FormControl } from "@angular/forms";

export interface SettingItem{
    name: string;
    type: string;
    defaultValue: string;
    options?: string[];
}