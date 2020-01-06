import { useContext } from 'react'
import { NavigationContext } from 'react-navigation';

const useNavigation = () => {
    try{
        const navigation = useContext(NavigationContext);
        if (!navigation) {
            throw new Error(
                "react-navigation hooks require a navigation context but it couldn't be found. " +
                "Make sure you didn't forget to create and render the react-navigation app container. " +
                'If you need to access an optional navigation object, you can useContext(NavigationContext), which may return'
            );
        }
        return navigation;
    }catch(err){
        console.log('error -->',err)
    }
}

export default useNavigation;