// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HddFilledSvg from 'icon-base/es/asn/HddFilled';

export interface HddFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHddFilled: HddFilledIconType = (props, context) => <Icon name='HddFilled' {...{ ...props, ...context.attrs }} icon={HddFilledSvg} />;

IconHddFilled.displayName = 'IconHddFilled';
IconHddFilled.theme = 'filled';
IconHddFilled.originName = 'hdd';

export default IconHddFilled;
