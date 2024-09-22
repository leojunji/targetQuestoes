import java.util.Arrays;

public class Questao5 {

    /**
     * 5) Escreva um programa que inverta os caracteres de um string.
     *
     * IMPORTANTE:
     * a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
     * b) Evite usar funções prontas, como, por exemplo, reverse;
     * **/
    public static void main(String[] args) {
        String palavra = "target";
        String[] letras = palavra.split("");
        String[] invertida = new String[letras.length];
        System.out.println("Palavra normal: " + palavra);
        palavra = "";
        for (int i = letras.length-1; i >= 0; i--) {
            invertida[((letras.length-1)-i)] = letras[i];
            palavra += invertida[((letras.length-1)-i)];
        }
        System.out.println("Palavra invetida: " + palavra);
    }
}
