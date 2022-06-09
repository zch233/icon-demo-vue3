// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TagsFilledSvg from '@ant-design/icons-svg/lib/asn/TagsFilled';

export interface TagsFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TagsFilled: TagsFilledIconType = (props, context) => <Icon name='TagsFilled' {...{ ...props, ...context.attrs }} icon={TagsFilledSvg} />;

TagsFilled.displayName = 'TagsFilled';

export default TagsFilled;