// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FrownTwoToneSvg from 'icon-base/es/asn/FrownTwoTone';

export interface FrownTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFrownTwoTone: FrownTwoToneIconType = (props, context) => <Icon name='FrownTwoTone' {...{ ...props, ...context.attrs }} icon={FrownTwoToneSvg} />;

IconFrownTwoTone.displayName = 'IconFrownTwoTone';
IconFrownTwoTone.theme = 'twotone';
IconFrownTwoTone.originName = 'frown';

export default IconFrownTwoTone;
