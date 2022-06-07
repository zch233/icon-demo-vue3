// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import FilePdfFilledSvg from '@ant-design/icons-svg/lib/asn/FilePdfFilled';

export interface FilePdfFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FilePdfFilled: FilePdfFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={FilePdfFilledSvg} />
    ;

FilePdfFilled.displayName = 'FilePdfFilled';

export default FilePdfFilled;