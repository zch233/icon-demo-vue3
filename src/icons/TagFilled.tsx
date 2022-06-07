// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import TagFilledSvg from '@ant-design/icons-svg/lib/asn/TagFilled';

export interface TagFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TagFilled: TagFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={TagFilledSvg} />
    ;

TagFilled.displayName = 'TagFilled';

export default TagFilled;