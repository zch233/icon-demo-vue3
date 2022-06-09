// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TagsOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagsOutlined';

export interface TagsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TagsOutlined: TagsOutlinedIconType = (props, context) => <Icon name='TagsOutlined' {...{ ...props, ...context.attrs }} icon={TagsOutlinedSvg} />;

TagsOutlined.displayName = 'TagsOutlined';

export default TagsOutlined;