// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DownSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DownSquareFilled';

export interface DownSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DownSquareFilled: DownSquareFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DownSquareFilledSvg} />;

DownSquareFilled.displayName = 'DownSquareFilled';

export default DownSquareFilled;