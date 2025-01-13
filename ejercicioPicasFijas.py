# 1. Adivinar un numero de 4 cifras (los 4 numeros no se pueden repetir)
# 2. La maquina sera el oponente
# 3. Una pica es un numero que no se encuentra en la posicion correcta
# 4. Una fia es un numero en la posicion correcta

from random import randint
generarNumero = []
#Genera un numero aleatorio para posterior, guardarlo en numero aleatorio
def generarNum():
  num = ""

  while len(num)<4: #"len" da la longitud"
    n =  str(randint(0,9)) #"str" convierte cualquier valor en un string o cadena
    #"find "funcion de la clase string busca una subcadena dentro de una cadena si no encuentra la ubicacion arroja un "-1"
    if num.find(n) == -1:
      num += n
    return num
  
  
#Descompone los numeros que son strings para almacenarlos en listaRandom y listaRespuesta
def descomposicion(numeroAleatorio, respuesta):
  listaRandom = []
  listaRespuesta = []

  for i in respuesta:
    listaRespuesta.append(i)
  for i in numeroAleatorio:
    listaRandom.append(i)

  
numeroAleatorio = generarNumero()
print(numeroAleatorio)  # Para verificar (quitar en producción)

intentos = 0
max_intentos = 10

salida = ""

#Inicio de la ejecución
while salida != "no":
  respuesta = input("Ingresa por favor un numero de cuatro cifras")

  fijas = 0
  picas = 0

  for i in range(4):
      if respuesta[i] == numeroAleatorio[i]:
        fijas += 1
        # Si es una fija, no es necesario seguir buscando en esa posición
      elif respuesta[i] in numeroAleatorio:
        picas += 1
  
  print(f"Tienes {fijas} fijas y {picas} picas.")
  
  if fijas == 4:
    print("Felicidades, ganaste!")
    break
  elif picas == 4:
    print("¡Casi lo tienes! Sigue intentando.")
  
  if intentos == max_intentos:
    print("Lo siento, se te acabaron los intentos. El número era:", numeroAleatorio)