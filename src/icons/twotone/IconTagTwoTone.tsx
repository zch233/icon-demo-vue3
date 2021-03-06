// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TagTwoToneSvg from 'icon-base/es/asn/TagTwoTone';

export interface TagTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTagTwoTone: TagTwoToneIconType = (props, context) => <Icon name='TagTwoTone' {...{ ...props, ...context.attrs }} icon={TagTwoToneSvg} />;

IconTagTwoTone.displayName = 'IconTagTwoTone';
IconTagTwoTone.theme = 'twotone';
IconTagTwoTone.originName = 'tag';

export default IconTagTwoTone;
