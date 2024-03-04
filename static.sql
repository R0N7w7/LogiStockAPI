-- Tabla Instituto

CREATE TABLE Instituto (
  id INT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  codigo VARCHAR(10) NOT NULL
);

-- Tabla AreaAcademica

CREATE TABLE AreaAcademica (
  id INT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  codigo VARCHAR(10) NOT NULL,
  instituto_id INT,
  FOREIGN KEY (instituto_id) REFERENCES Instituto(id)
);

-- Tabla Edificio

CREATE TABLE Edificio (
  id INT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  numero_pisos INT NOT NULL,
  area_academica_id INT,
  FOREIGN KEY (area_academica_id) REFERENCES AreaAcademica(id)
);

-- Tabla Espacio

CREATE TABLE Espacio (
  id INT PRIMARY KEY,
  tipo VARCHAR(255) NOT NULL,
  numero INT NOT NULL,
  capacidad INT,
  edificio_id INT,
  FOREIGN KEY (edificio_id) REFERENCES Edificio(id)
);

-- Tabla Categoria

CREATE TABLE Categoria (
  id INT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT
);

-- Tabla Artículo

CREATE TABLE Articulo (
  id INT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  codigo VARCHAR(10) NOT NULL,
  cantidad INT NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  estado VARCHAR(255) NOT NULL,
  categoria_id INT,
  espacio_id INT,
  fecha_adquisicion DATE,
  fecha_baja DATE,
  numero_serie VARCHAR(255),
  FOREIGN KEY (categoria_id) REFERENCES Categoria(id),
  FOREIGN KEY (espacio_id) REFERENCES Espacio(id)
);

-- Tabla Proveedor

CREATE TABLE Proveedor (
  id INT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  telefono VARCHAR(255) NOT NULL,
  correo_electronico VARCHAR(255) NOT NULL
);

-- Tabla Carga de Recursos

CREATE TABLE CargaDeRecursos (
  id INT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  tipo VARCHAR(255) NOT NULL,
  articulo_id INT,
  FOREIGN KEY (articulo_id) REFERENCES Articulo(id)
);

-- Tabla Usuario

CREATE TABLE Usuario (
  id INT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  correo_electronico VARCHAR(255) NOT NULL,
  rol VARCHAR(255) NOT NULL
);

-- Tabla Movimiento

CREATE TABLE Movimiento (
  id INT PRIMARY KEY,
  tipo VARCHAR(255) NOT NULL,
  fecha_hora DATETIME NOT NULL,
  cantidad INT NOT NULL,
  usuario_id INT,
  articulo_id INT,
  FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
  FOREIGN KEY (articulo_id) REFERENCES Articulo(id)
);

-- Tabla Reporte

CREATE TABLE Reporte (
  id INT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  fecha_generacion DATE,
  contenido TEXT
);