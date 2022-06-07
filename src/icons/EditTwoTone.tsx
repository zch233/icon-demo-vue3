// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import EditTwoToneSvg from '@ant-design/icons-svg/lib/asn/EditTwoTone';

export interface EditTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const EditTwoTone: EditTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={EditTwoToneSvg} />
    ;

EditTwoTone.displayName = 'EditTwoTone';

export default EditTwoTone;