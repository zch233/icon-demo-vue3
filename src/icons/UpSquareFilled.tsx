// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UpSquareFilledSvg from '@ant-design/icons-svg/lib/asn/UpSquareFilled';

export interface UpSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UpSquareFilled: UpSquareFilledIconType = (props, context) => <Icon name='UpSquareFilled' {...{ ...props, ...context.attrs }} icon={UpSquareFilledSvg} />;

UpSquareFilled.displayName = 'UpSquareFilled';

export default UpSquareFilled;