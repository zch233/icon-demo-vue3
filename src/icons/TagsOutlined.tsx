// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TagsOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagsOutlined';

export interface TagsOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TagsOutlined: TagsOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TagsOutlinedSvg} />
    ;

TagsOutlined.displayName = 'TagsOutlined';

export default FunctionalComponent;