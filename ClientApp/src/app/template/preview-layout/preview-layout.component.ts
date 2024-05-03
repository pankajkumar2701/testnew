import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-preview-layout',
    templateUrl: './preview-layout.component.html',
    styleUrl: './preview-layout.component.scss'
})
export class PreviewLayoutComponent {
    @Input() mappedData: any[] = [];

    public getColumnClass(column: number): string {
        return `col-md-${(column && column > 0 && column <= 4) ? (column * 3) : 12}`;
    }
}