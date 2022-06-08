// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PlusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlusSquareFilled';

export interface PlusSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PlusSquareFilled: PlusSquareFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PlusSquareFilledSvg} />;

PlusSquareFilled.displayName = 'PlusSquareFilled';

export default PlusSquareFilled;