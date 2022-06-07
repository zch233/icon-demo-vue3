// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TagsFilledSvg from '@ant-design/icons-svg/lib/asn/TagsFilled';

export interface TagsFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TagsFilled: TagsFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TagsFilledSvg} />
    ;

TagsFilled.displayName = 'TagsFilled';

export default FunctionalComponent;