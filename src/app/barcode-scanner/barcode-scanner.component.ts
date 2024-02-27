import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare const onScan: any;

@Component({
  selector: 'app-barcode-scanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barcode-scanner.component.html',
  styleUrl: './barcode-scanner.component.css'
})
export class BarcodeScannerComponent implements OnInit {
  @ViewChild('barcodeInput') barcodeInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // Adjuntamos el escáner de código de barras al documento
    onScan.attachTo(document, {
      // Definimos la función onScan
      onScan: (sCode: string) => {
        // Asignamos el código de barras escaneado al input
        this.barcodeInput.nativeElement.value = sCode;
        this.barcodeInput.nativeElement.dispatchEvent(new Event('input'));
      },
    });
  }
}
