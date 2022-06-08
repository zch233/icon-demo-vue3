// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RightSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RightSquareFilled';

export interface RightSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RightSquareFilled: RightSquareFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={RightSquareFilledSvg} />;

RightSquareFilled.displayName = 'RightSquareFilled';

export default RightSquareFilled;