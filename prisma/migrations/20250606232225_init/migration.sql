-- CreateTable
CREATE TABLE "OrdenVenta" (
    "NroOrdenVta" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fechaEmision" DATETIME NOT NULL,
    "Motivo" TEXT NOT NULL,
    "Situacion" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DetalleOrdenVta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "NroOrdenVta" INTEGER NOT NULL,
    "CodMedicamento" INTEGER NOT NULL,
    "descripcionMed" TEXT NOT NULL,
    "cantidadRequerida" INTEGER NOT NULL,
    CONSTRAINT "DetalleOrdenVta_NroOrdenVta_fkey" FOREIGN KEY ("NroOrdenVta") REFERENCES "OrdenVenta" ("NroOrdenVta") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DetalleOrdenVta_CodMedicamento_fkey" FOREIGN KEY ("CodMedicamento") REFERENCES "Medicamento" ("CodMedicamento") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Laboratorio" (
    "CodLab" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "razonSocial" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contacto" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "OrdenCompra" (
    "NroOrdenC" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fechaEmision" DATETIME NOT NULL,
    "Situacion" TEXT NOT NULL,
    "Total" REAL NOT NULL,
    "CodLab" INTEGER NOT NULL,
    "NrofacturaProv" TEXT NOT NULL,
    CONSTRAINT "OrdenCompra_CodLab_fkey" FOREIGN KEY ("CodLab") REFERENCES "Laboratorio" ("CodLab") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DetalleOrdenCompra" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "NroOrdenC" INTEGER NOT NULL,
    "CodMedicamento" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" REAL NOT NULL,
    "montouni" REAL NOT NULL,
    CONSTRAINT "DetalleOrdenCompra_NroOrdenC_fkey" FOREIGN KEY ("NroOrdenC") REFERENCES "OrdenCompra" ("NroOrdenC") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DetalleOrdenCompra_CodMedicamento_fkey" FOREIGN KEY ("CodMedicamento") REFERENCES "Medicamento" ("CodMedicamento") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Medicamento" (
    "CodMedicamento" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descripcionMed" TEXT NOT NULL,
    "fechaFabricacion" DATETIME NOT NULL,
    "fechaVencimiento" DATETIME NOT NULL,
    "Presentacion" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "precioVentaUni" REAL NOT NULL,
    "precioVentaPres" REAL NOT NULL,
    "CodTipoMed" INTEGER NOT NULL,
    "Marca" TEXT NOT NULL,
    "CodEspec" INTEGER NOT NULL,
    CONSTRAINT "Medicamento_CodTipoMed_fkey" FOREIGN KEY ("CodTipoMed") REFERENCES "TipoMedic" ("CodTipoMed") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Medicamento_CodEspec_fkey" FOREIGN KEY ("CodEspec") REFERENCES "Especialidad" ("CodEspec") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Especialidad" (
    "CodEspec" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descripcionEsp" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TipoMedic" (
    "CodTipoMed" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descripcion" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DetalleOrdenVta_NroOrdenVta_CodMedicamento_key" ON "DetalleOrdenVta"("NroOrdenVta", "CodMedicamento");

-- CreateIndex
CREATE UNIQUE INDEX "DetalleOrdenCompra_NroOrdenC_CodMedicamento_key" ON "DetalleOrdenCompra"("NroOrdenC", "CodMedicamento");
