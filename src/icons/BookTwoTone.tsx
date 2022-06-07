// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import BookTwoToneSvg from '@ant-design/icons-svg/lib/asn/BookTwoTone';

export interface BookTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BookTwoTone: BookTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={BookTwoToneSvg} />
    ;

BookTwoTone.displayName = 'BookTwoTone';

export default BookTwoTone;