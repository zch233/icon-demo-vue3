// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlusCircleFilled';

export interface PlusCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PlusCircleFilled: PlusCircleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PlusCircleFilledSvg} />;

PlusCircleFilled.displayName = 'PlusCircleFilled';

export default PlusCircleFilled;