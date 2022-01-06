import { useContext } from 'react';
import { ValidVisibilityContext } from '../../context/ValidVisibilityContext';

export const ValidVisibility = () => {
    const { visibility, setVisibility } = useContext(ValidVisibilityContext);

    return (
        <div>
            <label htmlFor="visibility">Показывать валидные проверки</label>
            <input
                id="visibility"
                type="checkbox"
                checked={visibility}
                onChange={(event) => {
                    setVisibility(event.target.checked);
                }}
            />
        </div>
    );
};
