import pandas as pd

df = pd.read_csv("inventario_codigos.csv")
df = df.loc[:, ~df.columns.str.startswith('Unnamed')]
datos = df.to_dict(orient='records')

nuevo_diccionario =[]

datos_default = {'nombre':'Sin Nombre', 'descripcion':'Sin Nombre', 'tipo_unidad':'UND'}

for dato in datos:
    dato['venta'] = True
    if pd.isna(dato['nombre']): dato['nombre'] = datos_default['nombre']
    if pd.isna(dato['descripcion']): dato['descripcion'] = datos_default['descripcion']
    if pd.isna(dato['tipo_unidad']): dato['tipo_unidad'] = datos_default['tipo_unidad']
    nuevo_diccionario.append(dato)
df = pd.DataFrame(nuevo_diccionario)
df.to_csv('categoria.csv', index=False, encoding='utf-8')

print("Acabe")