import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Szkola } from './szkola/szkola';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
	]
})

export default class SzkolyModule {
	private szkoly: Szkola[] = [];
	dodajSzkole(nazwa: string, adres: string, imieDyrektora: string, nazwiskoDyrektora: string): Szkola {
		const id = this.szkoly.length + 1;
		const nowaSzkola = new Szkola(id, nazwa, adres, imieDyrektora, nazwiskoDyrektora);
		this.szkoly.push(nowaSzkola);
		return nowaSzkola;
	}
	usunSzkole(id: number): boolean {
		const index = this.szkoly.findIndex(szkola => szkola.getId() === id);
		if (index !== -1) {
			this.szkoly.splice(index, 1);
			return true;
		}
		return false;
	}
	wypiszSzkoly(): Szkola[] {
		return this.szkoly;
	}
}
