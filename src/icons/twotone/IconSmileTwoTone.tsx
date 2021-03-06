// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SmileTwoToneSvg from 'icon-base/es/asn/SmileTwoTone';

export interface SmileTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSmileTwoTone: SmileTwoToneIconType = (props, context) => <Icon name='SmileTwoTone' {...{ ...props, ...context.attrs }} icon={SmileTwoToneSvg} />;

IconSmileTwoTone.displayName = 'IconSmileTwoTone';
IconSmileTwoTone.theme = 'twotone';
IconSmileTwoTone.originName = 'smile';

export default IconSmileTwoTone;
