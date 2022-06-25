// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TagsTwoToneSvg from 'icon-base/es/asn/TagsTwoTone';

export interface TagsTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTagsTwoTone: TagsTwoToneIconType = (props, context) => <Icon name='TagsTwoTone' {...{ ...props, ...context.attrs }} icon={TagsTwoToneSvg} />;

IconTagsTwoTone.displayName = 'IconTagsTwoTone';
IconTagsTwoTone.theme = 'twotone';
IconTagsTwoTone.originName = 'tags';

export default IconTagsTwoTone;
