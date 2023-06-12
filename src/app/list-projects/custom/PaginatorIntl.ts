import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { NumberInput } from '@angular/cdk/coercion';

export interface PaginatorConfig {
    length: NumberInput,
    options: number[]
}

@Injectable()
export class PaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = `Primeira página`;
  itemsPerPageLabel = `Itens por pagina:`;
  lastPageLabel = `Última página`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Próxima página';
  previousPageLabel = 'Página Anterior';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Página 1 de 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Página ${page + 1} de ${amountPages}`;
  }
}