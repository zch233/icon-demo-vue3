// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BellFilledSvg from '@ant-design/icons-svg/lib/asn/BellFilled';

export interface BellFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BellFilled: BellFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={BellFilledSvg} />;

BellFilled.displayName = 'BellFilled';

export default FunctionalComponent;