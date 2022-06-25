// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CrownTwoToneSvg from 'icon-base/es/asn/CrownTwoTone';

export interface CrownTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCrownTwoTone: CrownTwoToneIconType = (props, context) => <Icon name='CrownTwoTone' {...{ ...props, ...context.attrs }} icon={CrownTwoToneSvg} />;

IconCrownTwoTone.displayName = 'IconCrownTwoTone';
IconCrownTwoTone.theme = 'twotone';
IconCrownTwoTone.originName = 'crown';

export default IconCrownTwoTone;
