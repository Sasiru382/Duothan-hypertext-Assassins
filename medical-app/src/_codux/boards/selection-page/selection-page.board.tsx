import { createBoard } from '@wixc3/react-board';
import { SelectionPage } from '../../../components/selection-page/selection-page';

export default createBoard({
    name: 'SelectionPage',
    Board: () => <SelectionPage />,
    environmentProps: {
        canvasWidth: 1106,
        canvasHeight: 793,
        windowWidth: 1024,
        windowHeight: 768,
    },
});
