import { useFecthGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";


describe('Test Suit al Custom Hook useFecthGifs', () => {

    test('Debe de retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFecthGifs('One Punch'));

        //const { data, loading } = useFecthGifs( 'One Punch');

        // console.log(resp);

        const { data, loading } = result.current;
        // console.log(data, loading);

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);


    });

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {


        const { result, waitForNextUpdate } = renderHook(() => useFecthGifs('One Punch'));

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);




    });







});