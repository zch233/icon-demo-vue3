// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DribbbleSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DribbbleSquareFilled';

export interface DribbbleSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DribbbleSquareFilled: DribbbleSquareFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DribbbleSquareFilledSvg} />;

DribbbleSquareFilled.displayName = 'DribbbleSquareFilled';

export default DribbbleSquareFilled;