// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import CommentOutlinedSvg from '@ant-design/icons-svg/lib/asn/CommentOutlined';

export interface CommentOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CommentOutlined: CommentOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={CommentOutlinedSvg} />
    ;

CommentOutlined.displayName = 'CommentOutlined';

export default CommentOutlined;