// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TagsTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagsTwoTone';

export interface TagsTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TagsTwoTone: TagsTwoToneIconType = (props, context) => <Icon name='TagsTwoTone' {...{ ...props, ...context.attrs }} icon={TagsTwoToneSvg} />;

TagsTwoTone.displayName = 'TagsTwoTone';

export default TagsTwoTone;