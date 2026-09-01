import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface TextoState {
    value: string;
    numero: number;
    booleano: boolean;
}

const initialState: TextoState = {
    value: "hola",
    numero: 0,
    booleano: false,
};

const textoSlice = createSlice({
    name: 'texto',
    initialState,
    reducers: {
        setValue(state, action: PayloadAction<string>) {
            state.value = action.payload;
        },
        setNumero(state, action: PayloadAction<number>) {
            state.numero = action.payload;
        },
        setBooleano(state, action: PayloadAction<boolean>) {
            state.booleano = action.payload;
        },
    },
});

export const { setValue, setNumero, setBooleano } = textoSlice.actions;
export default textoSlice.reducer;
